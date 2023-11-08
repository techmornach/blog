import Folder from './folder.svg'
import GraduationCap from './graduationcap.svg'
import GameControl from './gamecontroller.svg'

const FolderIcon = () => {
  return <Folder className="h-10 w-10 text-primary-color-500 dark:text-primary-color-dark-500" />
}
export const GradIcon = () => {
  return (
    <GraduationCap className="h-10 w-10 text-primary-color-500 dark:text-primary-color-dark-500" />
  )
}
export const GameIcon = () => {
  return (
    <GameControl className="h-10 w-10 text-primary-color-500 dark:text-primary-color-dark-500" />
  )
}

export default FolderIcon
