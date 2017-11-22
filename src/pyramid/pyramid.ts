export const pyramid = (n: number): void => {
  if ( n <= 0 ) return // tslint:disable-line
  const lineWidth: number = n * 2 - 1

  for ( let row: number = 0; row < n; row++ ) {
    const start: number = lineWidth - n - row
    const end: number = lineWidth - start
    let line: string = ''
    for ( let column: number = 0; column < lineWidth; column++ ) {
      column !== 0 && ( line += ' ' )
      line += column >= start && column < end ? '*' : ' '
    }
    console.log( line ) // tslint:disable-line no-console
  }
}
