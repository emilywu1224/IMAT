FasdUAS 1.101.10   ��   ��    k             l      ��  ��   b\
 Copyright (c) 2009 Intuit, Inc.
 All rights reserved. This program and the accompanying materials
 are made available under the terms of the Eclipse Public License v1.0
 which accompanies this distribution, and is available at
 http://www.opensource.org/licenses/eclipse-1.0.php
 
 Contributors:
     Intuit, Inc - initial API and implementation
     � 	 	� 
   C o p y r i g h t   ( c )   2 0 0 9   I n t u i t ,   I n c . 
   A l l   r i g h t s   r e s e r v e d .   T h i s   p r o g r a m   a n d   t h e   a c c o m p a n y i n g   m a t e r i a l s 
   a r e   m a d e   a v a i l a b l e   u n d e r   t h e   t e r m s   o f   t h e   E c l i p s e   P u b l i c   L i c e n s e   v 1 . 0 
   w h i c h   a c c o m p a n i e s   t h i s   d i s t r i b u t i o n ,   a n d   i s   a v a i l a b l e   a t 
   h t t p : / / w w w . o p e n s o u r c e . o r g / l i c e n s e s / e c l i p s e - 1 . 0 . p h p 
   
   C o n t r i b u t o r s : 
           I n t u i t ,   I n c   -   i n i t i a l   A P I   a n d   i m p l e m e n t a t i o n 
   
  
 i         I     �� ��
�� .aevtoappnull  �   � ****  o      ���� 0 argv  ��    k     �       l     ��  ��    a [set theDestinationFolder to choose folder with prompt "Please select a destination folder:"     �   � s e t   t h e D e s t i n a t i o n F o l d e r   t o   c h o o s e   f o l d e r   w i t h   p r o m p t   " P l e a s e   s e l e c t   a   d e s t i n a t i o n   f o l d e r : "      r         l     ����  I    �� ��
�� .corecnte****       ****  o     ���� 0 argv  ��  ��  ��    o      ���� 0 numargs numArgs      Z    #  ����  >        o    	���� 0 numargs numArgs   m   	 
����   k     ! !  " # " I   �� $��
�� .ascrcmnt****      � **** $ l    %���� % b     & ' & b     ( ) ( m     * * � + + ( N u m b e r   o f   a r g s   w a s :   ) l    ,���� , c     - . - o    ���� 0 numargs numArgs . m    ��
�� 
ctxt��  ��   ' m     / / � 0 0 P   1   a r g u m e n t   r e q u i r e d   t o   p e r f o r m   c l e a n u p .��  ��  ��   #  1�� 1 I   �� 2��
�� .ascrcmnt****      � **** 2 l    3���� 3 m     4 4 � 5 5 z U s a g e :   C l e a n U p X C o d e I n s t r u m e n t . s c p t   / p a t h / t o / a p p H o m e / l o g s / r u n s��  ��  ��  ��  ��  ��     6 7 6 r   $ , 8 9 8 c   $ * : ; : l  $ ( <���� < n   $ ( = > = 4   % (�� ?
�� 
cobj ? m   & '����  > o   $ %���� 0 argv  ��  ��   ; m   ( )��
�� 
TEXT 9 o      ���� 0 logpathstring logPathString 7  @ A @ r   - 3 B C B l  - 1 D���� D 4   - 1�� E
�� 
psxf E o   / 0���� 0 logpathstring logPathString��  ��   C o      ���� 0 logpath logPath A  F G F I  4 =�� H��
�� .ascrcmnt****      � **** H l  4 9 I���� I b   4 9 J K J m   4 5 L L � M M  l o g P a t h   i s :   K l  5 8 N���� N c   5 8 O P O o   5 6���� 0 logpath logPath P m   6 7��
�� 
ctxt��  ��  ��  ��  ��   G  Q R Q r   > E S T S n  > C U V U I   ? C�������� 0 getdate getDate��  ��   V  f   > ? T o      ���� $0 targetfoldername targetFolderName R  W X W l  F F��������  ��  ��   X  Y Z Y l  F F�� [ \��   [ * $Create a new file to archive the Run    \ � ] ] H C r e a t e   a   n e w   f i l e   t o   a r c h i v e   t h e   R u n Z  ^ _ ^ O   F e ` a ` I  J d���� b
�� .corecrel****      � null��   b �� c d
�� 
kocl c m   N Q��
�� 
cfol d �� e f
�� 
insh e o   T U���� 0 logpath logPath f �� g��
�� 
prdt g K   X ^ h h �� i��
�� 
pnam i o   [ \���� $0 targetfoldername targetFolderName��  ��   a m   F G j j�                                                                                  MACS  alis    r  Macintosh HD               �j�H+   �
Finder.app                                                      �|�F!M        ����  	                CoreServices    �jp      �F��     � S S  3Macintosh HD:System:Library:CoreServices:Finder.app    
 F i n d e r . a p p    M a c i n t o s h   H D  &System/Library/CoreServices/Finder.app  / ��   _  k l k l  f f��������  ��  ��   l  m n m l  f f�� o p��   o L F Get references to the target dir which will hold the archived results    p � q q �   G e t   r e f e r e n c e s   t o   t h e   t a r g e t   d i r   w h i c h   w i l l   h o l d   t h e   a r c h i v e d   r e s u l t s n  r s r l  f f�� t u��   t A ; as well as the source dir which we will delete afterwards.    u � v v v   a s   w e l l   a s   t h e   s o u r c e   d i r   w h i c h   w e   w i l l   d e l e t e   a f t e r w a r d s . s  w x w r   f q y z y l  f m {���� { b   f m | } | b   f k ~  ~ o   f g���� 0 logpathstring logPathString  m   g j � � � � �  / } o   k l���� $0 targetfoldername targetFolderName��  ��   z o      ���� "0 targetdirstring targetDirString x  � � � r   r � � � � l  r | ����� � c   r | � � � l  r x ����� � 4   r x�� �
�� 
psxf � o   t w���� "0 targetdirstring targetDirString��  ��   � m   x {��
�� 
alis��  ��   � o      ���� 0 	targetdir 	targetDir �  � � � r   � � � � � l  � � ����� � c   � � � � � l  � � ����� � 4   � ��� �
�� 
psxf � l  � � ����� � b   � � � � � o   � ����� 0 logpathstring logPathString � m   � � � � � � �  / R u n   1��  ��  ��  ��   � m   � ���
�� 
alis��  ��   � o      ���� 0 	sourcedir 	sourceDir �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   � 0 *Move over the files and delete the Run dir    � � � � T M o v e   o v e r   t h e   f i l e s   a n d   d e l e t e   t h e   R u n   d i r �  ��� � O   � � � � � k   � � � �  � � � I  � ��� � �
�� .coremoveobj        obj  � n   � � � � � 1   � ���
�� 
ects � o   � ����� 0 	sourcedir 	sourceDir � �� ���
�� 
insh � o   � ����� 0 	targetdir 	targetDir��   �  ��� � I  � ��� ���
�� .coredeloobj        obj  � o   � ����� 0 	sourcedir 	sourceDir��  ��   � m   � � � ��                                                                                  MACS  alis    r  Macintosh HD               �j�H+   �
Finder.app                                                      �|�F!M        ����  	                CoreServices    �jp      �F��     � S S  3Macintosh HD:System:Library:CoreServices:Finder.app    
 F i n d e r . a p p    M a c i n t o s h   H D  &System/Library/CoreServices/Finder.app  / ��  ��     � � � l     ��������  ��  ��   �  � � � l      �� � ���   � V P
Get the Current Date converted to the ISO 8601:2004 
international date format
    � � � � � 
 G e t   t h e   C u r r e n t   D a t e   c o n v e r t e d   t o   t h e   I S O   8 6 0 1 : 2 0 0 4   
 i n t e r n a t i o n a l   d a t e   f o r m a t 
 �  � � � i     � � � I      �������� 0 getdate getDate��  ��   � k     m � �  � � � r      � � � I    ������
�� .misccurdldt    ��� null��  ��   � o      ���� 0 now   �  � � � r     � � � m    	 � � � � �  - � o      ���� 0 	delimiter   �  � � � r     � � � c     � � � n     � � � 1    ��
�� 
year � o    ���� 0 now   � m    ��
�� 
TEXT � o      ���� 0 year_string   �  � � � r    " � � � I     �� ���� 60 appendzerostodoubledigits appendZerosToDoubleDigits �  ��~ � c     � � � c     � � � n     � � � m    �}
�} 
mnth � o    �|�| 0 now   � m    �{
�{ 
long � m    �z
�z 
TEXT�~  �   � o      �y�y 0 month_string   �  � � � r   # / � � � I   # -�x ��w�x 60 appendzerostodoubledigits appendZerosToDoubleDigits �  ��v � c   $ ) � � � n   $ ' � � � 1   % '�u
�u 
day  � o   $ %�t�t 0 now   � m   ' (�s
�s 
TEXT�v  �w   � o      �r�r 0 
day_string   �  � � � r   0 < � � � I   0 :�q ��p�q 60 appendzerostodoubledigits appendZerosToDoubleDigits �  ��o � c   1 6 � � � n   1 4 � � � 1   2 4�n
�n 
hour � o   1 2�m�m 0 now   � m   4 5�l
�l 
TEXT�o  �p   � o      �k�k 0 hour_string   �  � � � r   = I � � � I   = G�j ��i�j 60 appendzerostodoubledigits appendZerosToDoubleDigits �  ��h � c   > C � � � n   > A � � � 1   ? A�g
�g 
min  � o   > ?�f�f 0 now   � m   A B�e
�e 
TEXT�h  �i   � o      �d�d 0 minute_string   �  � � � r   J V � � � I   J T�c ��b�c 60 appendzerostodoubledigits appendZerosToDoubleDigits �  ��a � c   K P � � � n   K N � � � m   L N�`
�` 
scnd � o   K L�_�_ 0 now   � m   N O�^
�^ 
TEXT�a  �b   � o      �]�] 0 second_string   �    l  W W�\�[�Z�\  �[  �Z   �Y L   W m b   W l b   W j b   W h	 b   W f

 b   W d b   W b b   W ` b   W ^ b   W \ b   W Z o   W X�X�X 0 year_string   l 
 X Y�W�V o   X Y�U�U 0 	delimiter  �W  �V   o   Z [�T�T 0 month_string   l 
 \ ]�S�R o   \ ]�Q�Q 0 	delimiter  �S  �R   o   ^ _�P�P 0 
day_string   l 	 ` a�O�N m   ` a �  _�O  �N   o   b c�M�M 0 hour_string   l 
 d e�L�K o   d e�J�J 0 	delimiter  �L  �K  	 o   f g�I�I 0 minute_string   l 
 h i�H�G o   h i�F�F 0 	delimiter  �H  �G   o   j k�E�E 0 second_string  �Y   �   l     �D�C�B�D  �C  �B    !"! l      �A#$�A  # � �
Append Leading zeros to a string if it is only of length 1. Returns the numeric 
string with appended zeros. Will return the given string if its 
length is not equal to 1
   $ �%%X 
 A p p e n d   L e a d i n g   z e r o s   t o   a   s t r i n g   i f   i t   i s   o n l y   o f   l e n g t h   1 .   R e t u r n s   t h e   n u m e r i c   
 s t r i n g   w i t h   a p p e n d e d   z e r o s .   W i l l   r e t u r n   t h e   g i v e n   s t r i n g   i f   i t s   
 l e n g t h   i s   n o t   e q u a l   t o   1 
" &�@& i    '(' I      �?)�>�? 60 appendzerostodoubledigits appendZerosToDoubleDigits) *�=* o      �<�< 0 numericstring numericString�=  �>  ( k     ++ ,-, Z     ./�;�:. =    010 n     232 1    �9
�9 
leng3 o     �8�8 0 numericstring numericString1 m    �7�7 / r    454 b    676 m    	88 �99  07 o   	 
�6�6 0 numericstring numericString5 o      �5�5 0 numericstring numericString�;  �:  - :�4: L    ;; o    �3�3 0 numericstring numericString�4  �@       �2<=>?�2  < �1�0�/
�1 .aevtoappnull  �   � ****�0 0 getdate getDate�/ 60 appendzerostodoubledigits appendZerosToDoubleDigits= �. �-�,@A�+
�. .aevtoappnull  �   � ****�- 0 argv  �,  @ �*�* 0 argv  A  �)�( *�' /�& 4�%�$�#�"�! L� � j������� ���� �����
�) .corecnte****       ****�( 0 numargs numArgs
�' 
ctxt
�& .ascrcmnt****      � ****
�% 
cobj
�$ 
TEXT�# 0 logpathstring logPathString
�" 
psxf�! 0 logpath logPath�  0 getdate getDate� $0 targetfoldername targetFolderName
� 
kocl
� 
cfol
� 
insh
� 
prdt
� 
pnam� 
� .corecrel****      � null� "0 targetdirstring targetDirString
� 
alis� 0 	targetdir 	targetDir� 0 	sourcedir 	sourceDir
� 
ects
� .coremoveobj        obj 
� .coredeloobj        obj �+ ��j  E�O�k ���&%�%j O�j Y hO��k/�&E�O*��/E�O���&%j O)j+ E�O� *a a a �a a �la  UO�a %�%E` O*�_ /a &E` O*��a %/a &E` O� _ a ,a _ l O_ j U> � ���BC�� 0 getdate getDate�  �  B ���
�	����� 0 now  � 0 	delimiter  �
 0 year_string  �	 0 month_string  � 0 
day_string  � 0 hour_string  � 0 minute_string  � 0 second_string  C � ����� ����������
� .misccurdldt    ��� null
� 
year
� 
TEXT
� 
mnth
�  
long�� 60 appendzerostodoubledigits appendZerosToDoubleDigits
�� 
day 
�� 
hour
�� 
min 
�� 
scnd� n*j  E�O�E�O��,�&E�O*��,�&�&k+ E�O*��,�&k+ E�O*��,�&k+ E�O*��,�&k+ E�O*��,�&k+ E�O��%�%�%�%�%�%�%�%�%�%? ��(����DE���� 60 appendzerostodoubledigits appendZerosToDoubleDigits�� ��F�� F  ���� 0 numericstring numericString��  D ���� 0 numericstring numericStringE ��8
�� 
leng�� ��,k  
�%E�Y hO� ascr  ��ޭ