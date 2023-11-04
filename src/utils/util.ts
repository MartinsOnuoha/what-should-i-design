export function randomChoice<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function truncate(text: string, MAX_COUNT = 178): string {
  return text.length > MAX_COUNT ? `${text.slice(0, MAX_COUNT)}...` : text
}

function getDomainName(url: string): string {
  try {
    const domain = /(?<=\.).+/.exec(new URL(url).hostname.replace('www.', ''))
    if (domain) {
      return domain.input
    }
  } catch (e) {
    return ''
  }
  return ''
}
export function isValidUrl(
  url: string,
  allowedDomains: Array<string> = ['figma.com', 'dribbble.com', 'behance.net', 'craftwork.design']
): boolean {
  const validUrlRegex = /^(https?|ftp):\/\/(www\.)?[^\s/$.?#].\S*$/i
  url = !url.includes('http') && !url.includes('https') ? `https://${url}` : url
  const domain = getDomainName(url)

  return validUrlRegex.test(url) && allowedDomains && allowedDomains.includes(domain)
}
