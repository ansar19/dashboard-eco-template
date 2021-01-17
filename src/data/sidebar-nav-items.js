export default function () {
  return [{
    title: 'Главная панель',
    to: {
      name: 'system-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Users',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'users',
    },
  }, {
    title: 'History',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'history',
    },
  }, {
    title: 'Errors',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'errors',
    },
  }];
}
