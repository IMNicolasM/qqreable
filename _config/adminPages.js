export default {
  qrs: {
    permission: 'iblog.posts.manage',
    activated: true,
    authenticated: true,
    path: '/qreable/qrs',
    name: 'iqreable.qrs',
    crud : import('@imagina/qqreable/_crud/qrs'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qrs',
    icon: 'fa-light fa-qrcode',
    subHeader: {
      refresh: true,
    }
  }  
}
