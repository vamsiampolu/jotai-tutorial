import { ReactNode } from 'react';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

export type AtomTuples = Parameters<typeof useHydrateAtoms>[0];

/**
 * TestProvider and HydrateAtom Props.
 */
interface ITestProvider {
  /**
   * initialValues Atoms and values to be injected
   */
  initialValues: AtomTuples;
  /**
   * children
   */
  children: ReactNode;
}

function HydrateAtoms({ initialValues, children }: ITestProvider) {
  useHydrateAtoms(initialValues);
  return children;
}

/**
 * A Provider to hydrate jotai atoms with injected values.
 * @component
 * @returns A Provider
 */
export function TestProvider({
  initialValues,
  children,
}: ITestProvider): ReactNode {
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
}
