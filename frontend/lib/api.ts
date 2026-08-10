import axios, { AxiosInstance } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
const API_TIMEOUT = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000')

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async healthCheck() {
    try {
      const response = await this.client.get('/api/health')
      return response.data
    } catch (error) {
      throw error
    }
  }

  async getClients(status?: string) {
    try {
      const params = status ? { status } : {}
      const response = await this.client.get('/api/clients', { params })
      return response.data
    } catch (error) {
      throw error
    }
  }

  async createClient(clientData: any) {
    try {
      const response = await this.client.post('/api/clients', clientData)
      return response.data
    } catch (error) {
      throw error
    }
  }

  async getModels() {
    try {
      const response = await this.client.get('/api/models')
      return response.data
    } catch (error) {
      throw error
    }
  }

  async createModel(modelData: any) {
    try {
      const response = await this.client.post('/api/models', modelData)
      return response.data
    } catch (error) {
      throw error
    }
  }

  async getAggregations() {
    try {
      const response = await this.client.get('/api/aggregations')
      return response.data
    } catch (error) {
      throw error
    }
  }

  async createAggregation(aggregationData: any) {
    try {
      const response = await this.client.post('/api/aggregations', aggregationData)
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export const apiClient = new ApiClient()
export default apiClient
