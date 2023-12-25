export {};

declare global {
  interface Object {
    toOmitString(...args: unknown[]): string;
  }
}

// 文字列を指定した文字数までに省略する
// args[0]：カットする文字数
// args[1]：省略時に末尾に付与する文字（未指定の場合は'...'を付与する）
Object.prototype.toOmitString = function (...args: unknown[]): string {
  let str = this.toString();
  if (this.length > args[0]) str = str.slice(0, args[0]) + (args[1] ?? '...');
  return str;
}
