import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Counter App', () => {
  test('初期表示時のカウントが0である', () => {
    render(<App />);
    expect(screen.getByText('現在の値: 0')).toBeInTheDocument();
  });

  test('プラスボタンをクリックするとカウントが増加する', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(screen.getByText('現在の値: 1')).toBeInTheDocument();
  });

  test('マイナスボタンをクリックするとカウントが減少する', () => {
    render(<App />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(screen.getByText('現在の値: -1')).toBeInTheDocument();
  });

  test('リセットボタンをクリックするとカウントが0に戻る', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    const resetButton = screen.getByText('リセット');
    
    // まず値を増やす
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('現在の値: 2')).toBeInTheDocument();
    
    // リセットする
    fireEvent.click(resetButton);
    expect(screen.getByText('現在の値: 0')).toBeInTheDocument();
  });
});
