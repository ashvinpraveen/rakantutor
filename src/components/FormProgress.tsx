import { motion } from "framer-motion";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
  onStepClick?: (step: number) => void;
}

export function FormProgress({ currentStep, totalSteps, steps, onStepClick }: FormProgressProps) {
  // Calculate progress based on steps (0 to 100%)
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full py-6">
      <div className="relative">
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/40 -translate-y-1/2 rounded-full" />

        {/* Active Progress Track */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-foreground -translate-y-1/2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />

        {/* Step Markers (Dots) */}
        <div className="relative flex justify-between items-center w-full">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isClickable = onStepClick && index <= currentStep; // Allow going back to previous steps

            return (
              <div key={index} className="relative flex flex-col items-center">
                <button
                  onClick={() => isClickable && onStepClick(index)}
                  disabled={!isClickable}
                  className={`
                    relative z-10 w-3 h-3 rounded-full transition-all duration-300
                    ${isCompleted || isActive ? "bg-foreground" : "bg-muted border-2 border-border"}
                    ${isActive ? "ring-4 ring-background scale-125" : ""}
                    ${isClickable ? "cursor-pointer hover:scale-110" : "cursor-default"}
                  `}
                  title={step}
                >
                  {/* Inner dot for active state */}
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>

                {/* Step Label (Optional - hidden on small screens or shown on hover) */}
                <span className={`
                  absolute top-6 text-[10px] font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-300
                  ${isActive ? "text-foreground opacity-100" : "text-muted-foreground opacity-0 sm:opacity-40"}
                `}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
