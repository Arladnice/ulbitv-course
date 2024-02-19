import { renderWidthTranslation } from 'shared/lib/tests/renderWidthTranslation/renderWidthTranslation';
import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('SideBar 1', () => {
        renderWidthTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
