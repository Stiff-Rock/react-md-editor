import React, { JSX } from 'react';
import { ContextStore, ExecuteCommandState } from '../../Context';
import { TextAreaProps } from './Textarea';
import { IProps } from '../../Types';
import { TextAreaCommandOrchestrator, ICommand } from '../../commands/';
import './index.less';
type RenderTextareaHandle = {
    dispatch: ContextStore['dispatch'];
    onChange?: TextAreaProps['onChange'];
    useContext?: {
        commands: ContextStore['commands'];
        extraCommands: ContextStore['extraCommands'];
        commandOrchestrator?: TextAreaCommandOrchestrator;
    };
    shortcuts?: (e: KeyboardEvent | React.KeyboardEvent<HTMLTextAreaElement>, commands: ICommand[], commandOrchestrator?: TextAreaCommandOrchestrator, dispatch?: React.Dispatch<ContextStore>, state?: ExecuteCommandState) => void;
};
export interface ITextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onScroll'>, IProps {
    value?: string;
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
    renderTextarea?: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement> | React.HTMLAttributes<HTMLDivElement>, opts: RenderTextareaHandle) => JSX.Element;
}
export type TextAreaRef = {
    text?: HTMLTextAreaElement;
    warp?: HTMLDivElement;
};
export default function TextArea(props: ITextAreaProps): import("react/jsx-runtime").JSX.Element;
export {};
