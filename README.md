### GameControllerTS 

## A Typescript Class for creating gamepad skeletons for javascript applications.

The GameController has a flexible constructor to generate as many buttons;
along with the ability to map these buttons to names.

## GameController Class 

The class comes with multiple functions to press, release and assign values against the
the defined buttons and axes of the controller.

# Constructor ( number_of_buttons: number, number_of_axes: number ) 

The constructor takes two numerical parameters [number_of_buttons, number_of_axes];
These dictate how many assignable buttons the controller will have and the number of axes 
the controller uses. Axes typically assigned to a gamepads joysticks. This is also 
where the map is instantiated for assigning labes for these buttons.


# Author 
Steven Boyd