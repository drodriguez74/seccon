import type en from '@/messages/en'

export type Dict = typeof en

const dicts: Record<string, Dict> = {}

export async function getDict(locale: string): Promise<Dict> {
  if (!dicts[locale]) {
    try {
      dicts[locale] = (await import(`@/messages/${locale}`)).default
    } catch {
      dicts[locale] = (await import('@/messages/en')).default
    }
  }
  return dicts[locale]
}
