import { COLORS } from '../constants';

export const rankPost = (rank_id: number) => {
  switch (rank_id) {
    case 1:
      return {
        color: COLORS.BLACK_1,
        nameRank: '',
      };
    case 2:
      return {
        color: COLORS.GREEN_3,
        nameRank: 'common.vipSilver',
      };
    case 3:
      return {
        color: COLORS.ORANGE_5,
        nameRank: 'common.vipGold',
      };
    case 4:
      return {
        color: COLORS.RED_1,
        nameRank: 'common.vipDiamond',
      };
  }
};
