import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

export function Tabs({ tabs, defaultValue, value, onValueChange, className }) {
    const generatedId = useId();
    const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.value);
    const activeValue = value ?? internalValue;
    const activeTab = tabs.find((tab) => tab.value === activeValue) ?? tabs[0];

    function selectTab(nextValue) {
        if (value === undefined) setInternalValue(nextValue);
        onValueChange?.(nextValue);
    }

    function handleKeyDown(event, index) {
        let nextIndex;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (nextIndex === undefined) return;
        event.preventDefault();
        const nextTab = tabs[nextIndex];
        selectTab(nextTab.value);
        document.getElementById(`${generatedId}-${nextTab.value}`)?.focus();
    }

    if (!tabs.length) return null;

    return (
        <div className={cn('space-y-4', className)}>
            <div aria-label="Tabs" className="border-divider flex gap-1 border-b" role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        aria-controls={`${generatedId}-panel-${tab.value}`}
                        aria-selected={tab.value === activeTab?.value}
                        className={cn(
                            'text-foreground-secondary border-b-2 border-transparent px-3 py-2 text-sm font-medium',
                            tab.value === activeTab?.value && 'border-primary text-foreground',
                            tab.disabled && 'opacity-disabled cursor-not-allowed',
                        )}
                        disabled={tab.disabled}
                        id={`${generatedId}-${tab.value}`}
                        key={tab.value}
                        onClick={() => selectTab(tab.value)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        role="tab"
                        tabIndex={tab.value === activeTab?.value ? 0 : -1}
                        type="button"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                aria-labelledby={`${generatedId}-${activeTab?.value}`}
                id={`${generatedId}-panel-${activeTab?.value}`}
                role="tabpanel"
                tabIndex={0}
            >
                {activeTab?.content}
            </div>
        </div>
    );
}
