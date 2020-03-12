'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sidebar').mCustomScrollbar({ theme: 'minimal' })
  $('#sidebarCollapse').on('click', () => {
    $('#sidebar').toggleClass('active') // open or close navbar
    $('.collapse.in').toggleClass('in') // close dropdowns
    $('a[aria-expanded=true]').attr('aria-expanded', 'false') // adjust aria-expanded attributes
  })
})
