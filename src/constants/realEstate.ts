const REAL_ESTATE = {
  PROJECT: 'project',
  REAL_ESTATE_FOR_YOU: 'real-estate-for-you',
  REAL_ESTATE_HOSTEST: 'real-estate-hostest',
  COMPASS: 'Hướng',
  LEGAL_DOCUMENT: 'Giấy tờ pháp lý',
  LOCATION: 'Vị trí',
};

export const YOUR_WANT = {
  INACTIVE: 0,
  POST_PUBLIC: 1,
  SAVE_PRIVATE: 2,
  PENDING: 3,
  SAVE_DRAFTS: 4,
  REJECT: 5,
  DOWN: 6,
};

const statuses = [
  {
    label: 'all',
    value: -1,
  },
  {
    label: 'pendingReview',
    value: 3,
  },
  {
    label: 'publicPosts',
    value: 1,
  },
  {
    label: 'hidden',
    value: 6,
  },
  {
    label: 'rejected',
    value: 5,
  },
  {
    label: 'expired',
    value: 0,
  },
  {
    label: 'privatePosts',
    value: 2,
  },
];

const calendar = [
  {
    label: 'lastWeek',
    value: 'week',
  },
  {
    label: 'last30Days',
    value: 'month',
  },
  {
    label: 'dateRange',
    value: 'date_range',
  },
];

const sortBy = [
  {
    label: 'newest',
    value: 'createdAt',
  },
  {
    label: 'priceAsc',
    value: 'price_asc',
  },
  {
    label: 'priceDesc',
    value: 'price_desc',
  },
  {
    label: 'areaAsc',
    value: 'area_asc',
  },
  {
    label: 'areaDesc',
    value: 'area_desc',
  },
  {
    label: 'hasVideos',
    value: 'videos',
  },
  {
    label: 'pricePerM2Asc',
    value: 'price_per_m_asc',
  },
  {
    label: 'pricePerM2Desc',
    value: 'price_per_m_desc',
  },
];

export { sortBy, calendar, statuses };

export default REAL_ESTATE;
