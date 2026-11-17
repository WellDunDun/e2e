/** The engine still constructs when its installed core predates in-memory uploads. */
import { expect, it, vi } from 'vitest';

vi.mock('@e2e-dev/core/engine', async (importOriginal) => {
  const core = await importOriginal<typeof import('@e2e-dev/core/engine')>();
  return {
    ...core,
    LOCATOR_ACTION_KINDS: core.LOCATOR_ACTION_KINDS.filter((kind) => kind !== 'setInputFilePayloads'),
  };
});

import { web } from '../../src/engine.ts';

it('keeps path uploads available without declaring a new spec key to an older core', () => {
  const engine = web();
  expect(engine.actions).toContain('setInputFiles');
  expect(engine.actions).not.toContain('setInputFilePayloads');
  expect(Object.hasOwn(engine, 'filePayloads')).toBe(false);
});
