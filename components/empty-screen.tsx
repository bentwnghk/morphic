import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '🌐 Tell me about the Paris Olympics',
    message: 'Tell me about the Paris Olympics'
  },
  {
    heading: '🌐 Why is Nvidia growing so rapidly?',
    message: 'Why is Nvidia growing so rapidly?'
  },
  {
    heading: '🎞️ Could you recommend a video about the Paris Olympics?',
    message: 'Could you recommend a video about the Paris Olympics?'
  },
  {
    heading: '🔗 Summary: https://arxiv.org/pdf/2402.06196v2',
    message: 'Summary: https://arxiv.org/pdf/2402.06196v2'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
