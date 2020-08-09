export const TABS = ['posts', 'employees'];
export const APP_LINKS = {
  POSTS: '/posts',
  EMPLOYEES: '/employees',
  POST_DETAILS: '/posts/:postId',
  EMPLOYEE_DETAILS: '/employees/:empId',
};

const DEFAULT_TAB_INDEX = 0;

export const getActiveTabIndex = (location) => {
  const { pathname } = location;
  const route = pathname.split('/')[1]

  if (!route) {
    return DEFAULT_TAB_INDEX;
  }

  return TABS.indexOf(route);
}
