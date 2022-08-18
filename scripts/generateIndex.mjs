import fs, { readdirSync } from 'fs'
import path from 'path'

function generate(sourceDir) {
  let modulesByType = {}
  const dirs = ['Components', 'Hooks']
  dirs.forEach(dir => {
    const dirPath = path.join(sourceDir, dir)

    const moduleNames = fs.readdirSync(dirPath)
    modulesByType[dir] = moduleNames
  })

  let imports = ''
  const modules = []

  Object.entries(modulesByType).forEach(([dir, mods]) => {
    mods.forEach(mod => {
      imports += `import ${mod} from './src/${dir}/${mod}'\n`
      modules.push(mod)
    })
  })

  const exports = `export { 
  ${modules.join(', \n  ')} 
}
`

  fs.writeFileSync('./index.js', [imports, exports].join('\n'))
  console.log('successfully wrote ./index.js')
}

generate(path.resolve('src'))
