export enum Directions {
  UP = 'UP',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
}

/**
 * Return a N*N sprial martrix
 *
 * @examples
 *  spiralMatirx(2) -> [ [ 1, 2 ],
 *                       [ 4, 3 ] ]
 *
 *  spiralMatrix(3) -> [ [ 1, 2, 3 ],
 *                       [ 8, 9, 4 ],
 *                       [ 7, 6, 5 ] ]
 */
export const spiralMatrix = (n: number): number[][] => {

  const matrix: number[][] = []
  let direction = Directions.RIGHT
  let row = 0
  let col = 0
  let i = 1

  while ( true ) {
    if ( n < 1 || i > n * n ) { break }

    Array.isArray( matrix[row] ) || ( matrix[row] = [] )
    matrix[row][col] = i

    switch ( direction ) {

      case Directions.UP:
        if ( row - 1 < 0
          || matrix[row - 1][col] !== undefined
        ) {
          col++
          direction = Directions.RIGHT
        } else {
          row--
        }
        break

      case Directions.RIGHT:
        if ( col + 1 > n - 1
          || matrix[row][col + 1] !== undefined
        ) {
          row++
          direction = Directions.DOWN
        } else {
          col++
        }
        break

      case Directions.DOWN:
        if ( row + 1 > n - 1
          || Array.isArray( matrix[row + 1] )
          && matrix[row + 1][col] !== undefined
        ) {
          col--
          direction = Directions.LEFT
        } else {
          row++
        }
        break

      case Directions.LEFT:
        if ( col - 1 < 0
          || matrix[row][col - 1] !== undefined
        ) {
          row--
          direction = Directions.UP
        } else {
          col--
        }
        break

    }

    i++
  }

  return matrix
}
