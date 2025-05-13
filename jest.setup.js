import '@testing-library/jest-dom'

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: '',
    }
  },
  usePathname() {
    return ''
  },
}))
