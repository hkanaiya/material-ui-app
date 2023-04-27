import React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import treeData from './treeData.json';

const renderTree = (nodes) => (
  <TreeItem key={nodes.nodeId} nodeId={nodes.nodeId} label={nodes.label}>
    {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
  </TreeItem>
);

const TreeComponent = () => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {treeData.map((item) => renderTree(item))}
    </TreeView>
  );
};

export default TreeComponent;
