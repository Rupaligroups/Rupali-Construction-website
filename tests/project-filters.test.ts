import { describe, expect, it } from 'vitest';
import { filterProjectsByType } from '../src/lib/project-filters';

describe('project category filters', () => {
  const projects = [{ type: 'residential' }, { type: 'commercial' }, { type: 'renovation' }, { type: 'Commercial' }];

  it('shows only the selected category, including mixed-case data', () => {
    expect(filterProjectsByType(projects, 'residential')).toEqual([projects[0]]);
    expect(filterProjectsByType(projects, 'commercial')).toEqual([projects[1], projects[3]]);
    expect(filterProjectsByType(projects, 'all')).toEqual(projects);
  });
});
