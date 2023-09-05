import './App.css';
import React, { useEffect, useState } from 'react';
import { IEntry } from './data';

const Entry: React.FC<IEntry> = React.memo(({ name, nodes, gap }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return <div style={{ paddingLeft: `${gap}px` }}>
    {name}
    {nodes?.length ? <button onClick={() => {
      setIsExpanded(prev => !prev);
    }}>{isExpanded ? '🔽' : '▶'}</button> : null}
    {isExpanded ? <div >{nodes?.map(({ name, nodes }) => <Entry name={name} nodes={nodes} gap='20' />)}</div> : null}
  </div>
})

function App() {

  const [files, setFiles] = useState<IEntry[]>([]);

  useEffect(() => {
    import('./data').then(({ files }) => setFiles(files.nodes!));
  }, [])

  const renderEntries = React.useCallback(({ name, nodes }: IEntry) => {
    return <Entry key={name} name={name} nodes={nodes} />
  }, []);


  return (
    <>
      {files?.map(renderEntries)}
    </>
  )
}

export default App
