import React, { useState } from 'react';
import { ChevronDown, Target } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const AnimatedCollapseCard = ({ 
  title = "Objective", 
  content, 
  children, 
  className,
  defaultExpanded = false,
  icon: Icon = Target
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className={cn(
      "w-full transition-all duration-300 hover:shadow-lg",
      isExpanded && "shadow-md",
      className
    )}>
      <CardHeader 
        className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 py-3" // Reduced padding
        onClick={toggleExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="h-4 w-4 text-blue-600" /> {/* Slightly smaller icon */}
            <h3 className="text-base font-semibold text-gray-800"> {/* Reduced from text-lg */}
              {title}
            </h3>
          </div>
          <ChevronDown 
            className={cn(
              "h-4 w-4 text-gray-600 transition-transform duration-300 ease-in-out", // Smaller chevron
              isExpanded && "rotate-180"
            )}
          />
        </div>
      </CardHeader>
      
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[700px]" : "max-h-0"
        )}
      >
        <CardContent className="pt-0 pb-2"> {/* Reduced from pb-4 to pb-2 for shorter bottom padding */}
          <div className={cn(
            "transition-all duration-300 ease-in-out transform",
            isExpanded 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-2"
          )}>
            {content && (
              <p className="text-sm text-gray-600 leading-relaxed mb-2"> {/* Reduced text size and margin */}
                {content}
              </p>
            )}
            {children}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default AnimatedCollapseCard;