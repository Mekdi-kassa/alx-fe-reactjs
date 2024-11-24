import PostsComponent from "./components/PostsComponent"
import { QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient()

function App() {
  
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
    </div>
  )
}

export default App