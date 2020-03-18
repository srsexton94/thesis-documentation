'use strict'

const expandMenu = function (event) {
  event.preventDefault()

  let submenu = event.target.id.split('-').map(e => {
    if (e === 'menu') {
      return 'submenu'
    } else {
      return e
    }
  }).join('-')
  submenu = '#' + submenu

  if ($(submenu).hasClass('hidden')) {
    $(submenu).removeClass('hidden')
  } else {
    $(submenu).addClass('hidden')
  }
}

const handlers = function () {
  $('.menu').on('click', expandMenu)
}

module.exports = handlers
