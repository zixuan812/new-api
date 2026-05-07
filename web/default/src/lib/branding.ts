export const SYNCAPI_DISPLAY_NAME = 'SyncAPI'

export function getSyncAPIDisplayName(name?: string | null): string {
  const baseName = name?.trim() || 'New API'
  if (baseName.toLowerCase().includes(SYNCAPI_DISPLAY_NAME.toLowerCase())) {
    return baseName
  }
  return `${baseName} / ${SYNCAPI_DISPLAY_NAME}`
}
