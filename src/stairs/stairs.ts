/**
 * Print a stairs shape with N levels using `#` character
 * Make sure the stairs have spaces on the right hand side.
 *
 * @examples
 *  stairs(1) -> '#'
 *
 *  stairs(2) -> '# '
 *               '##'
 *
 *  stairs(3) -> '#  '
 *               '## '
 *               '###'
 */
export const stairs = (level: number): void => {
  if ( level < 1 ) {
    return
  }
  for ( let row = 0; row < level; row++ ) {
    let stair: string = ''
    for ( let column = 0; column < level; column++ ) {
      stair += column > row ? ' ' : '#'
    }
    console.log( stair ) // tslint:disable-line no-console
  }
}
