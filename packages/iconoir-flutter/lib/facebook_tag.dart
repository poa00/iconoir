import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FacebookTag extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FacebookTag({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 13H11H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}