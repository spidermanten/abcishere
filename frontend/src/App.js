import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
    }}>
      <PipelineToolbar />
      <PipelineUI />
      <div className="fixed bottom-0 w-full">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
