export type SectionProps = {
  id: number
  name: string
  description: string
}

export type AccountProps = {
  id: number
  name: string
  description: string
}

export type Accounts = {
  account: AccountProps
  section: SectionProps
}
