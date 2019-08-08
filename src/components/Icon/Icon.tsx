import * as React from 'react'
import {
  FaAddressBook,
  FaAddressCard,
  FaAngleDoubleDown,
  FaAngleDown,
  FaArrowCircleDown,
  FaArrowDown,
  FaBirthdayCake,
  FaBuilding,
  FaCalendarAlt,
  FaCaretDown,
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCog,
  FaDatabase,
  FaEllipsisH,
  FaEnvelope,
  FaFile,
  FaFileAlt,
  FaFileArchive,
  FaFileDownload,
  FaFileExport,
  FaFileImport,
  FaFileUpload,
  FaFilter,
  FaFont,
  FaGripVertical,
  FaLock,
  FaLockOpen,
  FaPencilAlt,
  FaPlus,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegCalendarCheck,
  FaRegChartBar,
  FaRegImage,
  FaSearch,
  FaSlidersH,
  FaSort,
  FaSyncAlt,
  FaTable,
  FaThList,
  FaUserAlt,
  FaUserCircle,
  FaUsers,
} from 'react-icons/fa'
import { Check } from './svg/Check'
import { CheckCircle } from './svg/CheckCircle'
import { Cross } from './svg/Cross'
import { ExclamationTriangle } from './svg/ExclamationTriangle'

export interface IconProps {
  color?: string
  size?: number
}

export interface Props extends IconProps {
  name: keyof typeof iconMap
}

const iconMap = {
  check: Check,
  'check-circle': CheckCircle,
  cross: Cross,
  'exclamation-triangle': ExclamationTriangle,
  'fa-address-book': FaAddressBook,
  'fa-address-card': FaAddressCard,
  'fa-angle-double-down': FaAngleDoubleDown,
  'fa-angle-down': FaAngleDown,
  'fa-arrow-circle-down': FaArrowCircleDown,
  'fa-arrow-down': FaArrowDown,
  'fa-birthday-cake': FaBirthdayCake,
  'fa-building': FaBuilding,
  'fa-calendar-alt': FaCalendarAlt,
  'fa-caret-down': FaCaretDown,
  'fa-chart-area': FaChartArea,
  'fa-chart-bar': FaChartBar,
  'fa-chart-line': FaChartLine,
  'fa-chart-pie': FaChartPie,
  'fa-cog': FaCog,
  'fa-databas': FaDatabase,
  'fa-ellipsis-h': FaEllipsisH,
  'fa-envelope': FaEnvelope,
  'fa-file': FaFile,
  'fa-file-alt': FaFileAlt,
  'fa-file-archive': FaFileArchive,
  'fa-file-download': FaFileDownload,
  'fa-file-export': FaFileExport,
  'fa-file-import': FaFileImport,
  'fa-file-upload': FaFileUpload,
  'fa-filter': FaFilter,
  'fa-font': FaFont,
  'fa-grip-vertical': FaGripVertical,
  'fa-lock': FaLock,
  'fa-lock-open': FaLockOpen,
  'fa-pencil-alt': FaPencilAlt,
  'fa-plus': FaPlus,
  'fa-plus-circle': FaPlusCircle,
  'fa-question-circle': FaQuestionCircle,
  'fa-reg-calendar-check': FaRegCalendarCheck,
  'fa-reg-chart-bar': FaRegChartBar,
  'fa-reg-image': FaRegImage,
  'fa-search': FaSearch,
  'fa-sliders-h': FaSlidersH,
  'fa-sort': FaSort,
  'fa-sync-alt': FaSyncAlt,
  'fa-table': FaTable,
  'fa-th-list': FaThList,
  'fa-user-alt': FaUserAlt,
  'fa-user-circle': FaUserCircle,
  'fa-users': FaUsers,
}
export const Icon: React.FC<Props> = ({ name, ...props }) => {
  const SvgIcon = iconMap[name]
  return <SvgIcon {...props} />
}
