export function filterProjectsByType<T extends { type?: string | null }>(projects: T[], type: string): T[] {
  return type === 'all' ? projects : projects.filter(project => project.type?.toLowerCase() === type);
}
