export function setup(ctx) {
  ctx.patch(CombatManager, "onEnemyDeath").after(function () {
    this.player.food.slots.map((x, idx) => {
      let bankQuantity = this.game.bank.getQty(x.item);
      if (x.quantity > 0 && bankQuantity > 0) {
        this.player.equipFood(x.item, bankQuantity);
        notifyPlayer(
          this.game.hitpoints,
          getLangString("TOASTS", "FOOD_EQUIPPED"),
          "success"
        );
      } else {
        null;
      }
    });
  });
}
