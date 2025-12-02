// /Users/goldlabel/GitHub/core/gl-core/cartridges/Paywall/hooks/useTing.tsx
import { useSelector } from 'react-redux';
import { TRootState } from '../../Uberedux/store';

export function useTing() {
  return useSelector((state: TRootState) => state.redux.paywall.ting);
}
