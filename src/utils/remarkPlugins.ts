import { visit } from 'unist-util-visit';
import type { Node } from 'unist';
import type { List, ListItem } from 'mdast';
import type { NodeWithData } from '../types';

export const remarkCustomStyling = () => {
  return (tree: Node) => {
    visit(tree, 'inlineCode', (node: NodeWithData) => {
      const className = 'bg-gray-100 text-red-600 font-mono px-1 rounded';
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = className;
    });
    visit(tree, 'heading', (node: NodeWithData) => {
      if (node.depth === 3) {
        const className = 'text-md sm:text-lg font-semibold text-gray-800 mt-4 mb-2';
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.className = className;
      }
    });
    visit(tree, 'list', (node: List & NodeWithData) => {
      const classNames = node.ordered
        ? 'list-decimal list-outside pl-5 mb-4'
        : 'list-disc list-outside pl-5 mb-4';
      
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = classNames;
    });
    visit(tree, 'listItem', (node: ListItem & NodeWithData) => {
      const className = 'mb-2';
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = className;
    });
  };
};
