export default class InstructionState extends Phaser.State {
  create() {
    // Just to get us started
    this.stage.backgroundColor = '#182d3b';
    this.stateBg = this.add.image(0, 0, 'bg_instruction_screen');
    this.stateBg.width = this.game.width;
    this.stateBg.height = this.game.height;

    this.totalTimeActive = 0;
  }

  update() {
    this.totalTimeActive += this.time.elapsed;

    if (this.totalTimeActive > 5000) {
      this.splashComplete();
    }
  }

  splashComplete() {
    this.totalTimeActive = 0;
    this.state.start('MenuState', true, false);
  }
}
