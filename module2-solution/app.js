;(function () {
  'use strict'

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems()
    toBuyList.setBought = function (index) {
      ShoppingListCheckOffService.setBought(index)
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this
    alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems()
  }

  function ShoppingListCheckOffService() {
    var service = this
    var toBuy = [
      { name: 'cookies', quantity: 10 },
      { name: 'shoap', quantity: 5 },
      { name: 'sugar', quantity: 2 },
      { name: 'milk', quantity: 2 },
      { name: 'coffee', quantity: 8 },
    ]
    var bought = []

    service.setBought = function (index) {
      if (index >= 0 && index < toBuy.length) {
        var setItem = toBuy.splice(index, 1)[0]
        bought.push(setItem)
      }
    }
    service.getToBuyItems = function () {
      return toBuy
    }
    service.getBoughtItems = function () {
      return bought
    }
  }
})()
