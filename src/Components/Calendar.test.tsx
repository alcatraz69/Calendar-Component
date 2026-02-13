import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calendar } from './Calendar';

describe('Calendar Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      const date = new Date(2022, 9, 3);
      render(<Calendar date={date} />);
      
      expect(screen.getByText('October 2022')).toBeInTheDocument();
    });
    
    it('should display the correct month and year', () => {
      const date = new Date(2022, 9, 3);
      render(<Calendar date={date} />);
      
      expect(screen.getByText('October 2022')).toBeInTheDocument();
    });
    
    it('should display all day labels', () => {
      const date = new Date(2022, 9, 3);
      render(<Calendar date={date} />);
      
      expect(screen.getByText('Su')).toBeInTheDocument();
      expect(screen.getByText('Mo')).toBeInTheDocument();
      expect(screen.getByText('Tu')).toBeInTheDocument();
      expect(screen.getByText('We')).toBeInTheDocument();
      expect(screen.getByText('Th')).toBeInTheDocument();
      expect(screen.getByText('Fr')).toBeInTheDocument();
      expect(screen.getByText('Sa')).toBeInTheDocument();
    });
  });
  
  describe('Date Selection - October 2022', () => {
    it('should highlight the selected date (October 3, 2022)', () => {
      const date = new Date(2022, 9, 3);
      render(<Calendar date={date} />);
      
      const selectedDate = screen.getByTestId('selected-date');
      expect(selectedDate).toBeInTheDocument();
      expect(selectedDate).toHaveTextContent('3');
      expect(selectedDate).toHaveClass('bg-green-200');
    });
    
    it('should render the correct month and year for October 2022', () => {
      const date = new Date(2022, 9, 3);
      render(<Calendar date={date} />);
      
      expect(screen.getByText('October 2022')).toBeInTheDocument();
    });
  });
  
  
  describe('Different Dates', () => {  
    it('should handle leap year February correctly', () => {
      const date = new Date(2020, 1, 29);
      render(<Calendar date={date} />);
      
      expect(screen.getByText('February 2020')).toBeInTheDocument();
      
      const selectedDate = screen.getByTestId('selected-date');
      expect(selectedDate).toHaveTextContent('29');
    });
    
  });
  
  
  describe('Props Validation', () => {
    it('should update when date prop changes', () => {
      const { rerender } = render(<Calendar date={new Date(2022, 9, 3)} />);
      expect(screen.getByText('October 2022')).toBeInTheDocument();
      
      rerender(<Calendar date={new Date(2020, 2, 23)} />);
      expect(screen.getByText('March 2020')).toBeInTheDocument();
    });
  });
});
