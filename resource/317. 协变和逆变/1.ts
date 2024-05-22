interface Fans {
  call(): void;
}

interface IKun extends Fans {
  sing(): void;
  dance(): void;
  basketball(): void;
  rap(): void;
}

type FansTransform = (fans: Fans) => IKun;
type IKunTransform = (ikun: IKun) => Fans;

let fansTransform: FansTransform = (f) => f as any;
let ikunTransform: IKunTransform = (i) => i;
ikunTransform = fansTransform;
// let fans: Array<Fans> = [{
//   call() {
//     console.log('call');
//   },
// }];
// let ikun: Array<IKun> = [{
//   sing() {
//     console.log('sing');
//   },
//   dance() {
//     console.log('dance');
//   },
//   basketball() {
//     console.log('basketball');
//   },
//   rap() {
//     console.log('rap');
//   },
//   call() {
//     console.log('call');
//   },
// }];

// fans = ikun;
// fans[0]
