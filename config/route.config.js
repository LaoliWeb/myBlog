export default[
    {
      path:'/',
      component:'../layouts/BasicLayout',
      routes:[
        {
          path:'/',
          component:'./Home',
          redirect:'/index'
        },
        {
          path:'/index',
          component:'./Home/index'
        },
        {
          path:'/test',
          component:'./Home/Test'
        },
      ]
    },
  ]
  