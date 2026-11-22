import './PrototypeNotice.css'

interface PrototypeNoticeProps {
  title: string
  text: string
}

// Always visible above each form so nobody mistakes it for a working submission.
function PrototypeNotice({ title, text }: PrototypeNoticeProps) {
  return (
    <div className="prototype-notice">
      <p className="prototype-notice__title">{title}</p>
      <p>{text}</p>
    </div>
  )
}

export default PrototypeNotice
