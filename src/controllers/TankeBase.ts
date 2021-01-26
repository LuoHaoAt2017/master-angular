import { Vue, Component } from 'vue-property-decorator';
import Coordinate from '../models/Coordinate';
import Direction from '../enumerates/Direction';

@Component
class TankeBase extends Vue {
  private _position: Coordinate = {
    px: 0, py: 0
  };
  private _steps: number = 1; // 步值
  private _direction: Direction = Direction.north;

  /**
   * 移动的逻辑
   * 
   * 
   */
  move(direction: Direction) {
    switch(direction) {
      case Direction.east:
        this._position.px += this._steps;
      break;
      case Direction.west:
        this._position.px -= this._steps;
      break;
      case Direction.south:
        this._position.py += this._steps;
      break;
      case Direction.north:
        this._position.py -= this._steps;
      break;
      default: console.log('stat here');
    }
  }

  /**
   * @param direction 
   * @description 
   * 点击上下左右按键
   * 如果当前点击的按键和上一次的按键相同，那么直接前进。否则转向。
   */
  turn(direction: Direction) {
    // 转向的逻辑
    if (direction === this._direction) {
      this.move(direction);
    } else {
      this._direction = direction;
    }
  }

  /**
   * 当坦克的方向或者坦克的位置发生改变的情况下
   * 应该销毁现在的坦克，绘制处于新状态的坦克
   */
}

export default TankeBase;