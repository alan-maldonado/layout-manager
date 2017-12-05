import Vue from 'vue'
import Router from 'vue-router'
import Workspace from '@/components/workspace/Index'
import CustomLayout from '@/components/custom/Index'
import Login from '@/components/auth/Login'
import Callback from '@/components/auth/Callback'
import { requireAuth } from '@/services/AuthService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layoutName: 'homeLayout',
        title: 'Home layout',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/article',
      name: 'article',
      meta: {
        layoutName: 'articleLayout',
        title: 'Default Article Layout',
        elementRoute: 'article-all',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/article/all',
      name: 'article-all',
      meta: {
        layoutName: 'articleLayout',
        title: 'Select an Article',
        elementRoute: 'article-custom',
        elementType: 'articles',
        requiresAuth: true
      },
      component: CustomLayout
    },
    {
      path: '/article/:elementId',
      name: 'article-custom',
      meta: {
        layoutName: 'articleLayout',
        title: 'Custom Article Layout',
        elementRoute: 'article-all',
        elementType: 'articles',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/show',
      name: 'show',
      meta: {
        layoutName: 'showLayout',
        title: 'Default Show Layout',
        elementRoute: 'show-all',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/show/all',
      name: 'show-all',
      meta: {
        layoutName: 'showLayout',
        title: 'Select a Show',
        elementRoute: 'show-custom',
        elementType: 'shows',
        requiresAuth: true
      },
      component: CustomLayout
    },
    {
      path: '/show/:elementId',
      name: 'show-custom',
      meta: {
        layoutName: 'showLayout',
        title: 'Custom Show Layout',
        elementRoute: 'show-all',
        elementType: 'shows',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/category',
      name: 'category',
      meta: {
        layoutName: 'categoryLayout',
        title: 'Default Category Layout',
        elementRoute: 'category-all',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/category/all',
      name: 'category-all',
      meta: {
        layoutName: 'categoryLayout',
        title: 'Select a Category',
        elementRoute: 'category-custom',
        elementType: 'categories',
        requiresAuth: true
      },
      component: CustomLayout
    },
    {
      path: '/category/:elementId',
      name: 'category-custom',
      meta: {
        layoutName: 'categoryLayout',
        title: 'Custom Category Layout',
        elementRoute: 'category-all',
        elementType: 'categories',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/tag',
      name: 'tag',
      meta: {
        layoutName: 'tagLayout',
        title: 'Default Tag Layout',
        elementRoute: 'tag-all',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/tag/all',
      name: 'tag-all',
      meta: {
        layoutName: 'tagLayout',
        title: 'Select a Tag',
        elementRoute: 'tag-custom',
        elementType: 'tags',
        requiresAuth: true
      },
      component: CustomLayout
    },
    {
      path: '/tag/:elementId',
      name: 'tag-custom',
      meta: {
        layoutName: 'tagLayout',
        title: 'Custom Tag Layout',
        elementRoute: 'tag-all',
        elementType: 'tags',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/person',
      name: 'person',
      meta: {
        layoutName: 'personLayout',
        title: 'Default Person Layout',
        elementRoute: 'person-all',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/person/all',
      name: 'person-all',
      meta: {
        layoutName: 'personLayout',
        title: 'Select a Person',
        elementRoute: 'person-custom',
        elementType: 'persons',
        requiresAuth: true
      },
      component: CustomLayout
    },
    {
      path: '/person/:elementId',
      name: 'person-custom',
      meta: {
        layoutName: 'personLayout',
        title: 'Custom Person Layout',
        elementRoute: 'person-all',
        elementType: 'persons',
        requiresAuth: true
      },
      component: Workspace
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach(requireAuth)

export default router
