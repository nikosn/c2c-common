/************************************************************************
 *                                                                       *
 *  Certificate Service -  Car2Car Core                                  *
 *                                                                       *
 *  This software is free software; you can redistribute it and/or       *
 *  modify it under the terms of the GNU Affero General Public License   *
 *  License as published by the Free Software Foundation; either         *
 *  version 3   of the License, or any later version.                    *
 *                                                                       *
 *  See terms of license at gnu.org.                                     *
 *                                                                       *
 *************************************************************************/
package org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic;

import java.io.IOException;

import org.bouncycastle.util.encoders.Hex;
import org.certificateservices.custom.c2x.asn1.coer.COERChoice;
import org.certificateservices.custom.c2x.asn1.coer.COERChoiceEnumeration;
import org.certificateservices.custom.c2x.asn1.coer.COEREncodable;
import org.certificateservices.custom.c2x.asn1.coer.COEROctetStream;

/**
 * This structure provides the key bytes for use with an identified symmetric algorithm. The only supported
 * symmetric algorithm is AES-128 in CCM mode as specified in 5.3.8.
 * <p>
 * <b>Critical information fields:</b>
 * If present, this is a critical information field as defined in 5.2.5. An implementation that does not 
 * recognize the indicated CHOICE for this type when verifying a signed SPDU shall indicate that the signed SPDU is invalid.
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
public class SymmetricEncryptionKey extends COERChoice {
	
	private static final int OCTETSTRING_SIZE = 16;
	
	private static final long serialVersionUID = 1L;
	
	public enum SymmetricEncryptionKeyChoices implements COERChoiceEnumeration{
		aes128Ccm;

		@Override
		public COEREncodable getEmptyCOEREncodable() throws IOException {
			return new COEROctetStream(OCTETSTRING_SIZE,OCTETSTRING_SIZE);
		}

	}
	
	/**
	 * Constructor used when encoding.
	 */
	public SymmetricEncryptionKey(SymmetricEncryptionKeyChoices choice, byte[] value) {
		super(choice, new COEROctetStream(value, OCTETSTRING_SIZE,OCTETSTRING_SIZE));
	}
	
	/**
	 * Constructor used when decoding.
	 */
	public SymmetricEncryptionKey() {
		super(SymmetricEncryptionKeyChoices.class);
	}
		
	/**
	 * Returns the type of point.
	 */
	public SymmetricEncryptionKeyChoices getType(){
		return (SymmetricEncryptionKeyChoices) choice;
	}

	@Override
	public String toString() {
		return "SymmetricEncryptionKey [" + choice + "=" +  new String(Hex.encode(((COEROctetStream) value).getData())) + "]";
	}
	
}
