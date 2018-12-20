import { createTree, Tree } from './tree'

test('tree', () => {
  const YEAR = new Date().getFullYear()
  const dom = createTree(Tree, 'html')
  dom.rootNode.appendChild('head').appendChild('title').appendChild('"title goes here"')
  const body = dom.rootNode.appendChild('body')
  body.appendChild('header').appendChild('h1').appendChild('"Level 1 Heading"')
  body.appendChild('main').appendChild('p').appendChild('"main content"')
  body.appendChild('footer').appendChild('small').appendChild(`"Copyright ${YEAR}"`)

  expect('\n' + dom.print()).toBe(`
html
    head
        title
            "title goes here"
    body
        header
            h1
                "Level 1 Heading"
        main
            p
                "main content"
        footer
            small
                "Copyright ${YEAR}"`)
})
