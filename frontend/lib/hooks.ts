import { useState, useEffect, useCallback } from 'react'
import { apiClient } from './api'

export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await apiCall()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, dependencies)

  return { data, loading, error }
}

export function useHealthCheck() {
  const [status, setStatus] = useState<string>('checking')
  const [isHealthy, setIsHealthy] = useState<boolean>(false)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await apiClient.healthCheck()
        setStatus('healthy')
        setIsHealthy(true)
      } catch (error) {
        setStatus('unhealthy')
        setIsHealthy(false)
      }
    }

    checkHealth()
    const interval = setInterval(checkHealth, 30000)
    return () => clearInterval(interval)
  }, [])

  return { status, isHealthy }
}

export function useClients(status?: string) {
  const { data, loading, error } = useApi(
    () => apiClient.getClients(status),
    [status]
  )

  const createClient = useCallback(
    async (clientData: any) => {
      try {
        const newClient = await apiClient.createClient({
          ...clientData,
          status: 'active',
        })
        return newClient
      } catch (error) {
        console.error('Failed to create client:', error)
        throw error
      }
    },
    []
  )

  return { clients: data || [], loading, error, createClient }
}

export function useModels() {
  const { data, loading, error } = useApi(() => apiClient.getModels())

  const createModel = useCallback(
    async (modelData: any) => {
      try {
        const newModel = await apiClient.createModel(modelData)
        return newModel
      } catch (error) {
        console.error('Failed to create model:', error)
        throw error
      }
    },
    []
  )

  return { models: data || [], loading, error, createModel }
}

export function useAggregations() {
  const { data, loading, error } = useApi(() => apiClient.getAggregations())

  const createAggregation = useCallback(
    async (aggregationData: any) => {
      try {
        const newAggregation = await apiClient.createAggregation(
          aggregationData
        )
        return newAggregation
      } catch (error) {
        console.error('Failed to create aggregation:', error)
        throw error
      }
    },
    []
  )

  return { aggregations: data || [], loading, error, createAggregation }
}
