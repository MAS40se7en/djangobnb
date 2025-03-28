export const convos = [
    {
        id: "1",
        name: "user1",
        image: "profile_pic_1.jpg",
        message: "Hello, how are you?",
        date: "2024-06-01",
    },
    {
        id: "2",
        name: "user2",
        image: "profile_pic_1.jpg",
        message: "Hello, how are you?",
        date: "2024-06-01",
    },
    {
        id: "3",
        name: "user3",
        image: "profile_pic_1.jpg",
        message: "Hello, how are you?",
        date: "2024-06-01",
    },
    {
        id: "4",
        name: "user4",
        image: "profile_pic_1.jpg",
        message: "Hello, how are you?",
        date: "2024-06-01",
    },
  ]

const Conversation = ({}) => {
  return (
    <div className="space-y-6">
        {convos.map((convo) => (
            <div className="px-6 py-4 border border-primary/50 rounded-xl cursor-pointer">
            <p className="mb-6 text-xl text-primary">{convo.name}</p>

            <p className="text-sm">{convo.message}</p>
            <p className="text-primary-hover text-xs">Go to Conversation</p>
        </div>
        ))}
    </div>
  )
}

export default Conversation