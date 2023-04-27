import React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const TreeComponent = () => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Root">
        <TreeItem nodeId="2" label="Child 1">
          <TreeItem nodeId="3" label="Grandchild 1" />
          <TreeItem nodeId="4" label="Grandchild 2" />
        </TreeItem>
        <TreeItem nodeId="5" label="Child 2">
          <TreeItem nodeId="6" label="Grandchild 3" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default TreeComponent;
